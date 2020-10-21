importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');

importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBHVFR_EL_qwApZr41CDOn-xHIo0vvadTA",
    authDomain: "local-quiz-app.firebaseapp.com",
    databaseURL: "https://local-quiz-app.firebaseio.com",
    projectId: "local-quiz-app",
    storageBucket: "local-quiz-app.appspot.com",
    messagingSenderId: "411207786329",
    appId: "1:411207786329:web:a9aeae12c01e4e9cf5f648"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.messaging();


  var CACHE_NAME = 'ali-site-cache-v1';
  var urlsToCache = [
    '/',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    '/firebase-messaging-sw.js',
    '/App.tsx',
    '/index.html',
    '/App.css',
    '/services/material.json',
    '/back1',
    '/src'
  
  ];
  
  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });