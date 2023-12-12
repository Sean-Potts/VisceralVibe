import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();

  const cur = Number(page);
  useEffect(() => {
    if (page) dispatch(getPosts(page));
  }, [page]);

  return (
    <div className={classes.root}>
      <Pagination
        classes={{ ul: classes.ul }}
        count={numberOfPages}
        page={cur || 1}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            component={Link}
            to={`/posts?page=${item.page}`}
          />
        )}
      />
    </div>
  );
};

export default Paginate;
