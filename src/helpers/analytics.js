export default function analytics(name, name2, name3, name4) {
  window.dataLayer.push(`{'event': '${name}','eventCategory': '${name2}', 'eventAction': '${name3}', 'eventLabel': '${name4}'}`);
    // alert(`{'event': '${name}','eventCategory': '${name2}', 'eventAction': '${name3}', 'eventLabel': '${name4}'}`)
  }