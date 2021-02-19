// import about from '../../assets/img/about.jpg';
// import hero from '../../assets/img/hero.jpg';
// import img01big from '../../assets/img/img-01-big.jpg';
import img01 from '../assets/img/img-01.jpg';
import img02 from '../assets/img/img-02.jpg';
import img03 from '../assets/img/img-03.jpg';
import img04 from '../assets/img/img-04.jpg';
import img05 from '../assets/img/img-05.jpg';
import img06 from '../assets/img/img-06.jpg';
import img07 from '../assets/img/img-07.jpg';
import img08 from '../assets/img/img-08.jpg';
import img09 from '../assets/img/img-09.jpg';
import img10 from '../assets/img/img-10.jpg';
import img11 from '../assets/img/img-11.jpg';
import img12 from '../assets/img/img-12.jpg';
import img13 from '../assets/img/img-13.jpg';
import img14 from '../assets/img/img-14.jpg';
import img15 from '../assets/img/img-15.jpg';
import img16 from '../assets/img/img-16.jpg';
// import people1 from '../../assets/img/people-1.jpg';
// import people2 from '../../assets/img/people-2.jpg';
// import people3 from '../../assets/img/people-3.jpg';
// import people4 from '../../assets/img/people-4.jpg';
// import selectArrow from '../../assets/img/select-arrow.png';

function randomDate(start, end) {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toDateString();
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const demo = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
];
// const titles = [
//     'clocks',
//     'plants',
//     'morning',
//     'pinky',
//     'hangers',
//     'perfumes',
//     'bus',
//     'newyorks',
//     'abstract',
//     'flowers',
//     'rosy',
//     'rocki',
//     'purple',
//     'sea',
//     'turtle',
//     'peache',
// ];
const mainData = [
    demo.map((img) => ({
        title: 'Clocks',
        date: randomDate(new Date(2019, 0, 1), new Date()),
        views: getRandomNumberBetween(1000, 5000),
        img,
    })),
];

// const mainData = [
//     demo.map((img) =>
//         titles.map((title) => ({
//             title,
//             date: randomDate(new Date(2029, 0, 1), new Date()),
//             views: getRandomNumberBetween(1000, 5000),
//             img,
//         }))
//     ),
// ];

export default mainData;
