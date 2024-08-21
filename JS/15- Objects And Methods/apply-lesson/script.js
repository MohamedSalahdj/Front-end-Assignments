console.log(typeof window)
console.log(window.location.href)
// window.location.assign("") --> to chnage link
// let user = {
//     // properties
//     theName: "Ahmed",
//     theAge: 25,
// }

//     // methods
//     sayHello:  () => {
//         return "Hello Man"
//     },
// }



// console.log(user.sayHello())
console.log("---------------------")


let student = {
    "name": "Mohamed",
    "id": 20218017,
    country: "Egypt"
}


console.log(student['id'])


let dynamicVar = "country"



console.log(student.dynamicVar) // Can not access using dot notaion

console.log(student[dynamicVar])



let user = {
    name: "Osama",
    age: 38,
    skills: ["HTML", "CSS", "JS"],
    available: false,
    addresses: {
      ksa: "Riyadh",
      egypt: {
        one: "Cairo",
        two: "Giza",
      },
    },
    checkAv: function () {
      if (user.available === true) {
        return `Free For Work`;
      } else {
        return `Not Free`;
      }
    },
  };

console.log(user['addresses']['egypt'])
console.log(typeof user.addresses.ksa)

console.log(user['skills'])
console.log(typeof user['skills'])

console.log(user.checkAv()) // console.log(user['checkAv']())


console.log("----------------------")

let frameWork = {
  name: "Django",
  version: {
    'v1': ['v1.1', 'v1.12', 'v1.13'],
  }
}

console.log(frameWork['version']['v1'])


frameWork['history'] = "started from 2000"


console.log(frameWork['history'])

let university = new Object({
  name: "cario univerity",
  collage:["Engineering", "Medicine", "Pharmacy"]
})

console.log(university.name)
console.log(university.collage)

//edit object
university.name = university.name.toUpperCase()
university.collage.push("AI")

// add new method


university.sayWelcomeForNewStudent = _ => `Welcome to Cario university`
console.log(university.name)
console.log(university.collage)

console.log(university.sayWelcomeForNewStudent())

console.log("==========================================")


console.log(this === window)

console.log(this)

function checkWhatIsthis () {
  return this
}


console.log(checkWhatIsthis() === this)


document.getElementById('cl').onclick = function () {
  console.log(this)
}


// document.getElementById('cl').onclick = () => {
//   console.log(this) // will refer to window 
// }


// document.getElementById('cl').onclick = (event) => {
//   console.log(event.currentTarget)
// }

console.log("======================================================")


let lang = {
  name: "JS",
  frameWork: ['React', 'Angular'],

  concat : function() {
    return `${this.name} - ${this.frameWork[0]}`
  },
};

console.log(lang.concat())

let obj = Object.create({});

obj.a = 150;



let copyObject = Object.create(lang)

copyObject.name = 'Java Script'

console.log(copyObject)
console.log(copyObject.concat())


console.log("======================================================")


let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop3: 3,
  prop1: 150
};

let finalObject = Object.assign(targetObject, obj1, obj2)


console.log(finalObject)


console.log("==========================END============================")