const rowBlog = document.querySelector(".row-blog");
let dataBlog = [];

const loadDataBlog = async () => {
  try {
    const resBlog = await fetch("/database/cBlog.json");
    dataBlog = await resBlog.json();
    loadUserDataBlog(dataBlog);
  } catch (error) {
    console.log(error);
  }
};

const loadUserDataBlog = (blogs) => {
    const outputBlog = blogs
      .map((elBlog) => {
        if(elBlog.id <= 4) {
            return `<div class="col-lg-3 col-md-3 col-sm-12 my-1">
            <div class="card" style="border-radius: 10px;">
                <img src="${elBlog.image}" alt="" class="image-card">
              <div class="card-body">
                <p class="paragraph-2 my-1">
                  ${elBlog.title}
                </p>
                <p class="p-content my-1">
                  ${elBlog.date}
                </p>
              </div>
            </div>
          </div>`;
        }
      })
      .join("");
      rowBlog.innerHTML = outputBlog;
    };
loadDataBlog();
