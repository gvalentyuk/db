import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { startFetchCollections } from "../../redux/shop/shop.actions";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../category/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ ...props }) => {
  const { isFetching } = useSelector((state) => state.shop.isFetching);
  const isLoaded = useSelector(selectIsCollectionsLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchCollections());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={"/shop"}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
        )}
      />
      <Route
        exact
        path={"/shop/:categoryId"}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />
        )}
      />
    </div>
  );
};

export default ShopPage;
