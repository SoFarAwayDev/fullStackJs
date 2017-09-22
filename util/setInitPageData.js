import pageData from '../server/models/pageData';

export default function () {
    pageData.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const miiPage  = new pageData({
        pageName: "miiPage",
        text: "Hello! It's Mii!=)))"
    });

    const aboutPage  = new pageData({
        pageName: "aboutPage",
        text: "It's about Mii!!!"
    });

    pageData.create([miiPage, aboutPage], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
