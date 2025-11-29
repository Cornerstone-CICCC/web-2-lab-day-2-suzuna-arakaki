$(function () {


  function fetchUserInfo() {
    $.ajax({
      url: "https://dummyjson.com/users/1",
      type: "GET",
      success: function (response) {
        console.log(response)
      },
      error: function (err) {
        console.error(err)
      }
    })
  }

  function fetchPosts() {
    $.ajax({
      url: "https://dummyjson.com/users/1/posts",
      type: "GET",
      success: function (response) {
        console.log(response)
      },
      error: function (err) {
        console.error(err)
      }
    })
  }

  function fetchTodos() {
    $.ajax({
      url: "https://dummyjson.com/users/1/todos",
      type: "GET",
      success: function (response) {
        console.log(response)
      },
      error: function (err) {
        console.error(err)
      }
    })
  }

  function buildUserInfo(item) {
    $('.info__image img').attr("src", item.image);
    $('.info__content').append(`
      <h1>${item.firstName} ${item.lastName}</h1>
      <p>Age: ${item.age}</p>
      `)
  }




  function idCounterFc() {
    let idCounter = 1;
    previousBtn.on('click', function () {
      if (idCounter === 1) {
        idCounter = 30
      } else {
        idCounter--
      }
      fetchUserInfo()
    })

    nextBtn.on('click', function () {
      if (idCounter === 30) {
        idCounter = 1
      } else {
        idCounter++
      }
      fetchUserInfo()
    })
  }



  // your code here
  // const infoImageUrl = $('.info__image img')
  // const infoContent = $('.info__content')
  // const postTitle = $('.posts h3')
  // const postBody = $('.posts ul')
  // const todoTitle = $('.todos h3')
  // const todoBody = $('.todos ul')

  // const buttons = $('header button')
  // const previousBtn = buttons.first()
  // const nextBtn = buttons.last()

  // // Button functions --------
  // // async function idCounterFc() {
  // //   try {
  // //     let idCounter = 1;
  // //     previousBtn.on('click', function () {
  // //       if (idCounter == 1) {
  // //         idCounter = 30
  // //       } else {
  // //         idCounter--
  // //       }
  // //     })

  // //     nextBtn.on('click', function () {
  // //       if (idCounter == 30) {
  // //         idCounter = 1
  // //       } else {
  // //         idCounter++
  // //       }
  // //     })
  // //   } catch (err) {
  // //     console.error(err)
  // //   }

  // // }
  // // idCounterFc()

  // let idCounter = 1;
  // previousBtn.on('click', function () {
  //   if (idCounter === 1) {
  //     idCounter = 30
  //   } else {
  //     idCounter--
  //   }
  //   infoDisplay()
  // })

  // nextBtn.on('click', function () {
  //   if (idCounter === 30) {
  //     idCounter = 1
  //   } else {
  //     idCounter++
  //   }
  //   infoDisplay()
  // })

  // // -------------------------

  // async function getInformation() {
  //   try {
  //     const resInfo = await fetch(`https://dummyjson.com/users/${idCounter}`)
  //     const infoData = await resInfo.json()
  //     return infoData
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // // async function getUserId() {
  // //   try {
  // //     const informationData = await getInformation();
  // //     const userId = informationData.id
  // //     return userId
  // //   } catch (err) {
  // //     console.error(err)
  // //   }
  // // }

  // async function getPosts() {
  //   try {
  //     const resPosts = await fetch('https://dummyjson.com/users/1/posts')
  //     const postData = await resPosts.json()
  //     return postData
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // async function getTodos() {
  //   try {
  //     const resTodos = await fetch('https://dummyjson.com/users/1/todos')
  //     const todoData = await resTodos.json()
  //     return todoData
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // async function infoDisplay() {
  //   try {
  //     const informationData = await getInformation();
  //     // const userIdData = await getUserId();
  //     const userPostData = await getPosts();
  //     const userTodoData = await getTodos();
  //     infoImageUrl.src = informationData.image;
  //     infoContent.innerHTML = `
  //       <h1>${informationData.firstName} ${informationData.lastName}</h1>
  //       <p>age: ${informationData.age}</p>
  //       <p>Email: ${informationData.email}</p>
  //       <p>Phone: ${informationData.phone}</p>
  //     `;
  //     postTitle.textContent = `${informationData.firstName}'s Posts`
  //     postBody.innerHTML = `
  //       <h4>${userPostData.posts[0].title}</h4>
  //       <p>${userPostData.posts[0].body}</p>
  //     `
  //     todoTitle.textContent = `${informationData.firstName}'s To-Dos`
  //     todoBody.innerHTML = `
  //       <li>${userTodoData.todos[0].todo}</li>
  //       <li>${userTodoData.todos[1].todo}</li>
  //     `
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
  // infoDisplay()

})