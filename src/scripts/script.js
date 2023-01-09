function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  // const img = document.querySelector(".profile img");

  // substituir img
  // if (html.classList.contains('light')) {
  //   // estando no light mode, adicionar a img tema light
  //   img.setAttribute('src', 'https://github.com/jusceliadesouza.png')
  // } else {
  //   // estando no modo normal, manter a img normal
  //   img.setAttribute('src', 'https://media.licdn.com/dms/image/C4E03AQEE0iAn9FkbaQ/profile-displayphoto-shrink_200_200/0/1647622947251?e=1677715200&v=beta&t=7vunbl0wekpUa8A2_-5BXT_jSbdh2Os3a-ywXuzkNNg')
  // }

}
