/**
  @2021 mdestagreddy Github
  HTML IFrame Srcdoc Inside Tag
**/

// Prototype
HTMLIFrameElement.prototype.setSrcdocInsideTag = function() {
  if (this.innerHTML.trim() != "") {
    this.srcdoc = this.innerHTML;
    let removeAll = this.querySelectorAll("*");
    removeAll.forEach((e) => {
      e.remove();
    });
  }
}
