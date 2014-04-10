# CSound 

Taken at Craft and Commerce, Downtown San Diego, CA.
Start: 9:09PM.

Francis: What do you want to build?

Alex: Build a mobile application.

F: Okay, be more specific.

A: Build a sound recorder.
    One that takes input from the phone.
    And outputs a color on the screen based on the decibel level.

F: What do we need to get this to work?

F: We are not using iOS, but instead HTML, CSS, and JS with PhoneGap.
    Good? 

A: Yeah!

F: Great!

A: So how do we go about this?

F: It's a matter of accessing the sound recording API and the storage API.
    We will do HTML css mockup AFTER we talk about the output.

F: (records into iPhone) "Hello I'm Francis Batac... French Fries."

A: Higher => Green
    Loud => Yellow
    Loudest => Red

A: When you playback the sound, the color changes.
    How does the color change?

F: How does it look like in your head Alex?

A: It stays in a certain color, so it starts with ... at this moment it will be green, but in a split second, but it will be higher... so it  
    will change at the moment.

F: Seeing Sound. I can see it in code!
    We map a scale, from softest to loudest.
    We find out what is the minimum and maximum dB that an iPhone can take.
    From there, we assign the three color ranges: soft, regular, high.
    From there, we have a gradient.
    We don't have a color spectrum.
    What is the transition between the color and sound?
    CSound. Let's open it. The whole screen will show the average color of each track. Is this correct?

A: One whole screen will represent a track.
To get to a new track, you swipe.
On the start screen it will be black background and a white circle.

F: Will I be able to save my sounds and look at them alter?
A: Yes.

Francis works on building a Phonegap application. He is reading documentation on sound recording API and store API for iPhone.
Alex is working on HTML CSS Prototype and with Photoshop to get everything together. (9:40PM)