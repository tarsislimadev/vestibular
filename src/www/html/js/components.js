
class Question extends nElement {
  constructor({ question = [], answers = [], right = 0 } = {}) {
    super({ component: { name: 'question' } })

    this.question = question
    this.answers = answers
    this.right = right

    this.append(this.getQuestionHTML())
    this.append(this.getAnswersHTML())

    this.on('rightanswer', ({ data: { answer } }) => console.log('Right answer ' + answer))
    this.on('wronganswer', ({ data: { answer } }) => console.log('Wrong answer ' + answer))
  }

  createTextElement(text) {
    const el = new nElement()
    el.setText(text)
    return el
  }

  createImageElement(href, alt = '') {
    const el = new nImage()
    el.href(href)
    el.alt(alt)
    return el
  }

  getQuestionHTML() {
    const el = new nElement()

    this.question.map((q) => {
      switch (q.type) {
        case 'text':
          el.append(this.createTextElement(q.text));
          break;

        case 'image':
          el.append(this.createImageElement(q.link, 'image'));
          break;
      }
    })

    return el
  }

  getAnswersHTML() {
    const self = this

    const el = new nElement()

    this.answers.map((q, answer) => {
      const answerEl = new nElement()
      answerEl.setText(`${String.fromCharCode(97 + answer)}: `)
      answerEl.on('click', () => {
        self.dispatch(
          self.right ? 'rightanswer' : 'wronganswer',
          { answer }
        )
      })

      switch (q.type) {
        case 'text':
          answerEl.append(self.createTextElement(q.text));
          break;

        case 'image':
          answerEl.append(self.createImageElement(q.link, 'image'));
          break;
      }

      el.append(answerEl)
    })

    return el
  }
}
