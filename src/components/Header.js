import React from "react";

const Header = props => {
  return(
    <div style={styles.topText}>{props.title}</div>
  )
}

export default Header

const styles = {
  topText: {
    alignSelf: "center",
    marginTop: 70,
    borderStyle: "solid",
    borderWidth: 5,
    color: "#fff",
    justifyContent: "center",
    padding: 12,
    fontWeight: "bold"
  }
}