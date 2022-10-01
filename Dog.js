class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return ` 
        <img src="${avatar}" class="avatar"></img>
        <div class="profile">
        <h4 class="name-age">${name}, ${age}</h4>
        <p class="bio">${bio}</p>
      </div>
        `;
  }
}

export default Dog;
