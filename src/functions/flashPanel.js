export async function flashPanel(panel) {
  return new Promise((resolve, reject) => {
    panel.classList.add("active");
    setTimeout(() => {
      panel.classList.remove("active");
      setTimeout(()=>{
        resolve();
      },500)
    }, 1000);
  });
}
