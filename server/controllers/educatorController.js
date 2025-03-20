export const updateRoleToEducator = async (req, res) => {
    try {
        console.log("Incoming Headers:", req.headers);

        if (!req.headers.authorization) {
            return res.json({ success: false, message: "Authorization header is missing!" });
        }

        console.log("Full Auth Data:", req.auth);

        if (!req.auth?.userId) {
            return res.json({ success: false, message: "User ID not found in req.auth!" });
        }

        const userId = req.auth.userId;

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: { role: "educator" }
        });

        res.json({ success: true, message: "You can publish a course now" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
