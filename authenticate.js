angular.module('lessonlace', ['ngRoute'])
    .controller("authenticate", authenticate) 

angular.module('lessonlace')
    .config(myRouter);

    myRouter.$inject = ['$routeProvider']
 
    function myRouter($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "/templates/signup.html"
        })
        .when("/app", {
            templateUrl:
            "/app.html#/nav"
        })
        .when("/signin", {
            templateUrl: "/templates/signin.html"
        })
        .otherwise({
            redirectTo: 'templates/signup.html'
        })
    }

function authenticate(){
    var aCtrl = this;
    console.log('Testing Auth');
      var CLIENT_ID = '553892757728-cev6cf803s6efjl7rgfsnp5tsrknuram.apps.googleusercontent.com';

      var SCOPES = ["https://www.googleapis.com/auth/classroom.courses.readonly", "https://www.googleapis.com/auth/classroom.coursework.students","https://www.googleapis.com/auth/classroom.profile.photos","https://www.googleapis.com/auth/classroom.profile.emails"];

      /**
       * Check if current user has authorized this application.
       */
      aCtrl.handleAuthClick = function(event) {
          console.log('here we are!');
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, aCtrl.handleAuthResult);
      };

      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      aCtrl.handleAuthResult = function(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
//          authorizeDiv.style.display = 'none';
//          aCtrl.loadClassroomApi();
            window.location.href = '/app.html#/nav';
            console.log('no error');
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
            console.log('error');
            authorizeDiv.style.display = 'inline';
        }
      }

      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
      aCtrl.handleAuthClick = function(event) {
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          aCtrl.handleAuthResult);
        return false;
      }

      /**
       * Load Classroom API client library.
       */
      aCtrl.loadClassroomApi = function() {
        gapi.client.load('classroom', 'v1', listCourses);
      }

      /**
       * Print the names of the first 10 courses the user has access to. If
       * no courses are found an appropriate message is printed.
       */
      function listCourses() {
          console.log('It is hitting listCourses')
        var request = gapi.client.classroom.courses.list({
          pageSize: 10
        });

        request.execute(function(resp) {
          var courses = resp.courses;
          appendPre('Courses:');

          if (courses.length > 0) {
            for (i = 0; i < courses.length; i++) {
              var course = courses[i];
              appendPre(course.name)
            }
          } else {
            appendPre('No courses found.');
          }

        });
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node.
       *
       * @param {string} message Text to be placed in pre element.
       */
      var appendPre = function(message) {
          console.log('It is hitting appendPre');
        var pre = document.getElementById('output');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }
}






