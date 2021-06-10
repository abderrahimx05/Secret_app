import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import useStyles from "./styles";
function Paginate() {
  const classes = useStyles();
  return (
    <div>
      <Pagination
        classes={{ ul: classes.ul }}
        count={5}
        page={1}
        variant="outlined"
        color="primary"
        renderItem={(item) => <PaginationItem {...item} />}
      />
    </div>
  );
}

export default Paginate;
