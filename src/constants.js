export const BOX_SIZE = 90;
export const SCRATCH_SIZE = 6;
export const SCRATCH_COUNT = BOX_SIZE / SCRATCH_SIZE;
export const QUESTION_MARK_DOTS = [21, 22, 23 ,35, 39, 49, 55, 70, 85, 99, 113, 127, 142, 157, 187];
const colors = ['#F247A0', '#4978F4']
export const WINNER_COLOR = colors.splice((Math.floor(Math.random() * colors.length)), 1);
export const LOOSER_COLOR = colors.splice((Math.floor(Math.random() * colors.length)), 1);
