function reverseStringBetween(st, a, b) {
  return st.slice(0, a) + st.slice(a, b + 1).split("").reverse().join("") +
    st.slice(b + 1);
}

console.log(reverseStringBetween("codewars", 1, 5));
