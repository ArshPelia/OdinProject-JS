const Message = require("../models/message");
// const MessageInstance = require("../models/messageinstance");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  // Get details of messages, message instances, creators and genre counts (in parallel)
  const [
    numMessages,
    // numMessageInstances,
    // numAvailableMessageInstances,
    ] = await Promise.all([
      Message.countDocuments({}).exec(),
      // MessageInstance.countDocuments({}).exec(),
      // MessageInstance.countDocuments({ status: "Available" }).exec(),
    ]);

  const allMessages = await Message.find({}, "title creator")
    .sort({ title: 1 })
    .populate("creator")
    .exec();

  res.render("board", {
    title: "Home",
    message_count: numMessages,
    message_list: allMessages 
    // message_instance_count: numMessageInstances,
    // message_instance_available_count: numAvailableMessageInstances,
  });
});


// Display list of all messages.
exports.message_list = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: All Messages List`);
  // const allMessages = await Message.find({}, "title creator")
  // .sort({ title: 1 })
  // .populate("creator")
  // .exec();

  // res.render("message_list", { title: "Message List", message_list: allMessages });
});

// Display detail page for a specific message.
exports.message_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Message detail: ${req.params.id}`);
});

// Display message create form on GET.
exports.message_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Message create GET");
});

// Handle message create on POST.
exports.message_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Message create POST");
});

// Display message delete form on GET.
exports.message_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Message delete GET");
});

// Handle message delete on POST.
exports.message_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Message delete POST");
});

// Display message update form on GET.
exports.message_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Message update GET");
});

// Handle message update on POST.
exports.message_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Message update POST");
});
