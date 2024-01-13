import Pageres from 'pageres';

export default async (req, res) => {
  const { url, delay, width, height } = req.body;

  try {
    const pageres = new Pageres({ delay })
      .source(url, [`${width}x${height}`])
      .run();

    const [screenshot] = await pageres;
    
    res.setHeader('Content-Type', 'image/png');
    res.send(screenshot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
