# Implementation:

### Q) What frontend technology did you choose to use? What was the reason why?

I chose to use React and Typescript, these are both technologies i've used throughout my career and are the ones i'm most comfortable with. Therefore I knew I could hit the ground running with the tasks.

### Q) What's the command to start the application locally?

Frontend:

```
npm install

npm start
```

Backend - I've created a Dockerfile so in order to run the backend, simply build the image and run. Make sure to publish port 5000.

```
sudo docker build -t <your-docker-username>/vita-backend .

sudo docker run --name vita-backend -p 5000:5000 <your-docker-username>/vita-backend

```

---

# General:

### Q) Which parts did you spend the most time with? What did you find most difficult?

I spent the most time on the frontend UI design, personally I think this is my weakest skill. I can definitely get a bit caught up in thinking of what design to go with.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.

Overall I really enjoyed the test, especially the backend. It was great to get back to coding in node and I quickly remembered from my previous experience. Implemeting image uploading was a great challenge and satisfying to get working!
