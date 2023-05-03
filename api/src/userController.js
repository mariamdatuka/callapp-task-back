import fs from 'fs';

export function getFullData(req, res) {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error reading file");
        return;
      }
      res.setHeader("Content-Type", "application/json");
      res.end(data);
    });
  }

export function addItem(req,res){
    const newData = req.body;
    fs.writeFile('data.json', JSON.stringify(newData), err => {
      if (err) {
        res.status(500).send(`Error: ${err}`);
      } else {
        res.status(200).send('Data updated successfully');
      }
    });
   }

