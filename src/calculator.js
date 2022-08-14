export const SNEAKER_TYPES = ['ranger', 'hiker', 'sprinter', 'coacher'];

export default function calculator(state) {
    const { points, maxPoints } = getPoints();
    state.points = points;
    state.maxPoints = maxPoints;


}

function getPoints(rare) {

}