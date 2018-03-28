var config = {
    apiKey: "AIzaSyAC2jwubxU7Qk0Mp5uCCPRVRzvTuo_JhMw",
    authDomain: "train-scheduler-8fa13.firebaseapp.com",
    databaseURL: "https://train-scheduler-8fa13.firebaseio.com",
    projectId: "train-scheduler-8fa13",
    storageBucket: "train-scheduler-8fa13.appspot.com",
    messagingSenderId: "624317717916"
  };
  firebase.initializeApp(config);



  $(function () {
    $('#datetimepicker5').datetimepicker({
        use24hours: true,
        format: 'HH:mm'
    });
});