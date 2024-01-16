class Entity {
    constructor({ name, delay }) {
      this.name = name;
      this.delay = delay;
    }
  
    greet() {
      if (!this.name || !this.delay) {
        throw new Error('Thiếu thuộc tính name hoặc delay');
      }
  
      setTimeout(() => {
        console.log('Xin chào, tên tôi là ', this.name);
      }, this.delay);
    }
  }
  
  const java = new Entity({ name: 'Java', delay: 5000 });
  const cpp = new Entity({ name: 'C++', delay: 30 });
  
  java.greet();
  cpp.greet();
    