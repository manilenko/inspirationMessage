const arr = [
   "Believe in the power of your dreams. They are the blueprints of your future achievements.",
   "Embrace the journey of self-discovery. You are a masterpiece in the making.",
   "Every challenge you face is an opportunity for growth. Keep pushing forward.",
   "Your potential is limitless. Dare to explore it.",
   "Radiate positivity and watch how it illuminates the world around you.",
   "In every setback, there's a hidden lesson. Embrace the process of learning.",
   "Your actions today shape the reality of tomorrow. Choose wisely.",
   "Small steps lead to great accomplishments. Keep moving forward.",
   "Your resilience is your greatest strength. Keep bouncing back.",
   "Seize the day with courage and determination. The world is yours to conquer.",
   "Embrace uncertainty with open arms. It's the birthplace of opportunity.",
   "Your kindness has the power to change someone's world. Spread it generously.",
   "Don't wait for the perfect moment. Start now and make it perfect.",
   "Trust in your abilities. You are capable of achieving incredible things.",
   "Let your passion be the driving force behind your success.",
   "The only limits that exist are the ones you place upon yourself. Break free.",
   "Celebrate your progress, no matter how small. Every step forward counts.",
   "Be the reason someone believes in the goodness of humanity.",
   "Your journey may be tough, but so are you. Keep going.",
   "Chase your dreams relentlessly. Success is waiting for you at the finish line.",
   "You have the power to create the life you desire. Start by believing in yourself.",
   "Embrace failure as a stepping stone to success. It's just a temporary detour.",
   "The world needs your unique talents and gifts. Don't hold back.",
   "Your story is still being written. Make it a tale of courage, resilience, and triumph.",
   "Stay focused on your goals, even when the path seems unclear.",
   "Find joy in the journey, not just in the destination.",
   "Your mindset determines your reality. Choose positivity.",
   "The challenges you face today are preparing you for a brighter tomorrow.",
   "Never underestimate the power of perseverance. It can move mountains.",
   "Your potential is like a seed waiting to blossom. Nurture it with belief and effort.",
   "Remember, you are capable of far more than you imagine. Keep pushing the boundaries of possibility."
];

const button = document.getElementsByClassName('instiration-message-block__button');
const outMessage = document.getElementsByClassName('output-message');

button[0].addEventListener('click', outputMessage);

function outputMessage() {
   outMessage[0].innerHTML = arr[(Math.floor(Math.random() * arr.length))];
}