
app.post("/dsa", async (req, res) => {
    const newStructure = new DSA(req.body);
    try {
      await newStructure.save();
      res.status(201).json(newStructure);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  app.get("/dsa/:name", async (req, res) => {
    try {
      const item = await DSA.findOne({ dsaName: req.params.name });
      if (!item) {
        return res.status(404).json({ message: "Data structure not found" });
      }
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });