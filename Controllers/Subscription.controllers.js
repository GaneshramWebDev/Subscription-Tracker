import { workflowClient } from "../config/upstash.js";
import Subscription from "../Models/subscription.model.js";
import { SERVER_URL } from "../config/env.js";

export const createSubscription = async (req, res, next) => {
    try {
        console.log("Request Body:", req.body); // Debugging
        console.log("User:", req.user); // Debugging

        if (!req.user) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        const { workflowRunId } = await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: { subscriptionId: subscription._id }, // ✅ Define `body`
            headers: { "Content-Type": "application/json" }, // ✅ Define `headers`
            retries: 0, // ✅ Define `retries`
        });

        res.status(201).json({ success: true, data: subscription,workflowRunId });
    } catch (error) {
        console.error("Create Subscription Error:", error);
        next(error);
    }

};

export const getUserSubscriptions = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
            const error = new Error("You are not the owner of this account");
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({ user: req.params.id });
        res.status(200).json({ success: true, data: subscriptions });

    } catch (e) {
        next(e);
    }
};



export const deleteSubscription = async (req, res, next) => {
    try {
        const { id } = req.params;

        const subscription = await Subscription.findByIdAndDelete(id);

        if (!subscription) {
            return res.status(404).json({ success: false, message: "Subscription not found" });
        }

        res.status(200).json({ success: true, message: "Subscription deleted successfully" });
    } catch (error) {
        console.error("Delete Subscription Error:", error);
        next(error);
    }
};

