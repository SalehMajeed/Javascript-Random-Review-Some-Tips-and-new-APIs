window.addEventListener("scroll", function () {
  console.log("scroll event occur");
  const scolled = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;

  if (Math.ceil(scolled) == scrollable) {
    alert("You\ve been reached th bottom");
  }
});
