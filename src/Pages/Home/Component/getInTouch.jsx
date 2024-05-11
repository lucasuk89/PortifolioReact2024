export function scrollToContact(Contact) {
  const section = document.getElementById(Contact);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
}
