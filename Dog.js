class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return ` 
        <image src="${avatar}"></image>
        <h4 class="name-age">${name}, ${age}</h4>
        <p class="bio">${bio}</p>`;
  }
}

export default Dog;
