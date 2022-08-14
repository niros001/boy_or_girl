export const BOX_SIZE = 90;
export const BOX_MARGIN = 4;
export const CARD_SIZE = (BOX_SIZE * 3) + ((BOX_MARGIN * 2) * 4); // Do not change it!
const colors = ['#F247A0', '#4978F4']
export const WINNER_COLOR = colors.splice((Math.floor(Math.random() * colors.length)), 1);
export const LOOSER_COLOR = colors.splice((Math.floor(Math.random() * colors.length)), 1);
