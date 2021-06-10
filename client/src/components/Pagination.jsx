import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import useStyles from "./styles";
function Pagination() {
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

export default Pagination;
