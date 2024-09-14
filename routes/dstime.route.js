app.post("/time", async (req, res) => {
    const newComplexity = new Time(req.body);
    try {
      await newComplexity.save();
      res.status(201).json(newComplexity);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  
  app.get("/time/:name", async (req, res) => {
    try {
      const item = await Time.findOne({ dsaName: req.params.name });
      if (!item) {
        return res.status(404).json({ message: "Data structure not found" });
      }
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });