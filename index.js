let app5 = new Vue({
  el: "#app-5",

  data: {
    valueName: "",
    valueComment: "",
    comments: [],
    removeComments: [],
    styleBlock: {
      outline: "none",
      display: "flex",
      "flex-direction": "row",
      height: "960px"
    },

    styleInput: {
      width: "100%",
      height: "30px",
      "border-radius": "5px",
      border: "3px solid #6BCBB6",
      outline: "none",
      transition: "0.5s",
      "text-align": "center",
      "margin-bottom": "5%"
    },

    styleButton: {
      padding: "0",
      border: "none",
      font: "inherit",
      color: "inherit",
      cursor: "pointer",
      color: "#ffffff",
      "background-color": "#6BCBB6",
      "border-radius": "5px",
      outline: "none",
      transition: "0.5s",
      width: "100%",
      height: "40px",
      "justify-content": "flex-end"
    },

    historyBlock: {
      border: "3px solid rgb(107, 203, 182)",
      "margin-top": "5%",
      height: "100%",
      "border-radius": "5px"
    },

    styleAvatar: {
      width: "100px"
    },

    styleList: {
      "list-style": "none",
      margin: "0",
      padding: "0"
    },

    styleForm: {
      display: "flex",
      "flex-direction": "column",
      width: "25%"
    },

    styleCommentBlock: {
      width: "100%",
      height: "970px"
    },

    styleCommentWrap: {
      width: "75%",
      border: "3px solid #6BCBB6",
      "border-radius": "5px",
      "margin-left": "1%"
    },

    styleComment: {
      display: "flex",
      height: "100px",
      "justify-content": "space-between",
      padding: "1%",
      "border-bottom-style": "solid",
      "border-bottom-width": "2px",
      "border-bottom-color": "#6BCBB6"
    },

    styleCommentCenter: {
      display: "flex",
      "flex-direction": "column",
      "justify-content": "space-around"
    },

    styleButtonRemove: {
      height: "20px"
    },

    styleCommentCenterTop: {
      display: "flex",
      "flex-direction": "row",
      width: "800px",
      "justify-content": "space-between"
    },

    styleCommentRight: {
      display: "flex",
      "align-items": "center"
    },

    styleRemovedList: {
      "list-style": "none",
      margin: "0",
      padding: "0"
    },

    styleRemovedComment: {
      display: "flex",
      height: "100px",
      "justify-content": "space-between",
      padding: "1%",
      "border-bottom-style": "solid",
      "border-bottom-width": "2px",
      "border-bottom-color": "#6BCBB6"
    },

    styleRemovedCommentCenterTop: {
      display: "flex",
      "flex-direction": "row",
      "justify-content": "space-between"
    },

    styleRemovedCommentCenter: {
      display: "flex",
      "flex-direction": "column",
      "justify-content": "space-around",
      width: "80%"
    }
  },

  methods: {
    addComment() {
      console.log(this.valueName); 
      if (!this.valueName || !this.valueComment) return;
      let now = new Date();
      let commentObj = {
        avatar: "",
        name: this.valueName,
        comment: this.valueComment,
        date: {
          weekDay: now.getDate(),
          month: now.getMonth(),
          year: now.getFullYear(),
          hour: now.getHours(),
          minutes: now.getMinutes()
        },
        id: Date.now(),
        remove: ""
      };
      console.log(commentObj);
      this.comments.push(commentObj);
      this.valueName = "";
      this.valueComment = "";
    },

    inputChangeHandler(e) {
      console.log(e);
    },

    removeComment(commentId) {
      console.log(commentId);
      const commentIndex = this.comments.findIndex(
        a => a.id === Number(commentId)
      );

      let removeComment = this.comments.splice(commentIndex, 1);

      removeComment.forEach(element => {
        let nowRemoove = new Date();
        element.date.weekDay = nowRemoove.getDate();
        element.date.month = nowRemoove.getMonth();
        element.date.year = nowRemoove.getFullYear();
        element.date.hour = nowRemoove.getHours();
        element.date.minutes = nowRemoove.getMinutes();
        this.removeComments.push(element);
      });
    },

    saveComment() {
      localStorage.setItem(
        "store",
        JSON.stringify({
          commList: this.comments
        })
      );
    },

    addReverseComment(commentRemoveId) {
      const commentIndex = this.removeComments.findIndex(
        a => a.id === Number(commentRemoveId)
      );

      let addComment = this.removeComments.splice(commentIndex, 1);

      addComment.forEach(element => {
        let nowAdd = new Date();
        element.date.weekDay = nowAdd.getDate();
        element.date.month = nowAdd.getMonth();
        element.date.year = nowAdd.getFullYear();
        element.date.hour = nowAdd.getHours();
        element.date.minutes = nowAdd.getMinutes();
        this.comments.push(element);
      });
    }
  },

  created() {

    if (localStorage.getItem("store")) {
      let commentParse = JSON.parse(localStorage.getItem("store"));
      this.comments = commentParse.commList;
    }
  }
});
