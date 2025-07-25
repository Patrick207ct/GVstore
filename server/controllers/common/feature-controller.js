const Feature = require("../../models/Feature");

const addFeatureImage = async (req, res) => {
  try {
    const { image } = req.body;

    console.log(image, "image");

    const featureImages = new Feature({
      image,
    });

    await featureImages.save();

    res.status(201).json({
      success: true,
      data: featureImages,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getFeatureImages = async (req, res) => {
  try {
    const images = await Feature.find({});

    res.status(200).json({
      success: true,
      data: images,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const deleteFeatureImage = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Feature.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Image not found" });
    }
    res.json({ success: true, message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

module.exports = {
  addFeatureImage,
  getFeatureImages,
  deleteFeatureImage,  // export hàm xóa
};
