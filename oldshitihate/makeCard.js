console.log('this engineer', this.engineer);
console.log('this manager', this.manager);
console.log('this intern:', this.Intern);
const cardArr = [];

//generate cards
const generateCard = function(person) {
    if (person === 'Engineer') {
        newCard = `
          <article>
          <div>
              <h2>${this.name}</h2>
              <h3 onmouseover='${this.phone}'>${this.title}</h3>
          </div>
          <div>
              <div>
                  <button>${this.id}</button>
                  <button><a href="mailto:${this.email}>${this.email}</a></button>
                  <button><a href="https://www.github.com/${this.github}>${this.github}</a></button>
              </div>
          </div>
          </article>
        `;
      } else {
          newCard = `
            <article>
            <div>
                <h2>${this.name}</h2>
                <h3 onmouseover='${this.phone}'>${this.title}</h3>
            </div>
            <div>
                <div>
                  <button>${this.id}</button>
                  <button><a href="mailto:${this.email}>${this.email}</a></button>
                  <button>${this.github}</button>
                </div>
            </div>
            </article>
            `
      };
    cardArr.push(newCard);
} 

module.exports = { cardArr, generateCard };

  