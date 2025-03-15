import { Router } from 'express';
import authorization from '../Middlewares/auth.middleware.js';
import { createSubscription, deleteSubscription, getUserSubscriptions } from '../Controllers/Subscription.controllers.js';
import { verify } from 'jsonwebtoken';


const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => 
  res.send({ body: { title: 'GET all subscriptions' } })
);

subscriptionRouter.get('/:id', (req, res) => 
  res.send({ body: { title: 'GET subscription details' } })
);

subscriptionRouter.post('/', authorization,createSubscription);

// subscriptionRouter.put('/:id', (req, res) => 
//   res.send({ body: { title: 'UPDATE subscription' } })
// );

subscriptionRouter.delete('/:id', authorization,deleteSubscription);

subscriptionRouter.get('/user/:id',authorization,getUserSubscriptions )

// subscriptionRouter.put('/:id/cancel', (req, res) => 
//   res.send({ body: { title: 'CANCEL subscription' } })
// );

// subscriptionRouter.get('/upcoming-renewals', (req, res) => 
//   res.send({ title: 'GET upcoming renewals' })
// );

export default subscriptionRouter;
