const data = [
    {
        id: 1,
        name: "Mindfulness and Stress Relief Retreat",
        description: "Relax and rejuvenate with guided mindfulness practices and stress-relief techniques.",
        image: "images/relaxation-7282116_1280.jpg",
        date:"Date: June 10-15, 2024",
        location:"Location: Coastal Wellness Resort, California"
    },
    {
        id: 2,
        name: "Yoga and Meditation Retreat",
        description: "Join us for a transformative yoga and meditation retreat surrounded by the beauty of nature.Relax, rejuvenate, and restore your mind and body with daily yoga sessions, meditation, and healthy meals in a serene natural setting.",
        image: "https://cdn.dribbble.com/users/3414434/screenshots/14616859/media/94814b2e5bcd1dd9f926bdd0d98eda5c.gif",
        date:"Date: August 5-10, 2024",
        location:"Location: Mountain Retreat Center, Colorado"
    },
    {
        id: 3,
        name: "Detox Retreat",
        description: "Cleanse your body and mind with a detox retreat featuring detoxifying treatments, nutrient-rich juices, and wellness workshops.",
        image: "https://thumbs.dreamstime.com/z/praying-beautiful-middle-aged-woman-yoga-position-over-blue-sky-exercising-outdoors-sitting-stone-wearing-white-seeking-65445804.jpg?ct=jpeg"
        ,date:"Date: August 5-10, 2024",
        location:"Location: Coastal Wellness Resort, California"
    },
    {
        id: 4,
        name: "Wellness Retreat",
        description: "Experience holistic wellness with a wellness retreat focusing on nutrition, fitness, mindfulness, and self-care practices.",
        image: "https://plus.unsplash.com/premium_photo-1679522167005-f962c0163aeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ,date:"Date: August 5-10, 2024",
        location:"Location: Tropical Wellness Sanctuary, Hawaii"
    },
    {
        id: 5,
        name: "Nature Retreat",
        description: "Reconnect with nature and yourself on a nature retreat featuring outdoor activities, hiking, eco-friendly accommodations, and healthy cuisine.",
        image: "images/Nature.gif"
        ,date:"Date: August 5-10, 2024",
        location:"Location: Coastal Wellness Resort, California"
    },
    {
        id: 6,
        name: "Visit Hill Station",
        description: "Reconnect with nature and yourself on a nature retreat featuring outdoor activities, hiking, eco-friendly accommodations, and healthy cuisine.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdecSwIsCCaq81Qtdj1HAFAZFBCf9-igMDjTNhZoVkcawkMhPt4KkcXuSmmzZCYCpM9rI&usqp=CAU"
        ,date:"Date: August 15-10, 2024",
        location:"Location: Coastal Wellness Resort, California"
    }
    
]
document.addEventListener("DOMContentLoaded", () => {
    data.forEach((data)=>{
        const parentElement = document.getElementById("treats");
        const div=document.createElement("div");
        div.className="retreat";
        div.innerHTML=`<img src="${data.image}" alt="Retreat 3">
        <div class="retreat-info">
          <h2>${data.name}</h2>
          <p>${data.date}</p>
          <p>${data.location}</p>
          <p>${data.description}</p>
        </div>`;
       parentElement.appendChild(div);

    })
})