puts "🌱 Seeding..."
puts "Deleting old data..."
User.destroy_all
Pedal.destroy_all

puts "Creating Users..."
dan = User.create(username: "DannyLeeBeasley", password: "TrickyPassword13!")
david_gilmour = User.create(username: "DavidGilmour", password: "NeverGuess27!")

puts "Creating Pedals..."
tube_screamer = Pedal.create(name: "Ibanez TS808 Tube Screamer", effect_type: "Overdrive", price: 100, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://m.media-amazon.com/images/I/713LJ9zI96L._AC_SS450_.jpg", category: "Gain")
ocd = Pedal.create(name: "Fulltone OCD V2", effect_type: "Overdrive", price: 140, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://cdn.shopify.com/s/files/1/2161/9961/products/Fulltone-effect-OCD.jpg?v=1520232597", category: "Gain")
fuzz_face = Pedal.create(name: "Dunlop Dallas Arbiter Fuzz Face", effect_type: "Fuzz", price: 200, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://m.media-amazon.com/images/I/81icT7akRWL._AC_SY450_.jpg", category: "Gain")
power_boost = Pedal.create(name: "Colorsound Power Boost", effect_type: "Boost", price: 750, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://sugareelicks.com/wp-content/uploads/Colorsound_Powerboost-3.jpg", category: "Gain")
dyna_comp = Pedal.create(name: "MXR M-102 Dyna Comp Compressor", effect_type: "Compressor", price: 80, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://www.pitbullaudio.com/media/catalog/product/1/6/16001102001.main.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=", category: "Gain")
dearmond_volume_pedal = Pedal.create(name: "DeArmond 602 Volume Pedal", effect_type: "Volume", price: 50, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQM0tjOsxN2FM0S7dDaumHvPce8oHI8wANmYWSfJdGFlSYTWkNySk6yhlFWjBZ59T2-SHwtHxNIGB2quhEzaykGeFSC405YwjDQ9Q0lbcVbqVqqK7FM4F0u9Q&usqp=CAE", category: "Gain")
vox_wah = Pedal.create(name: "Vox v847A Wah-Wah", effect_type: "Wah", price: 120, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://cosmomusic.ca/product_images/vox-v847a/619ce79624daf34cb964778a/detail.jpg?c=1637672854", category: "Modulation")
cry_baby = Pedal.create(name: "Dunlop Cry Baby Standard Wah GCB95", effect_type: "Wah", price: 90, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://i.ebayimg.com/images/g/NA4AAOSwzl9f6c5p/s-l640.jpg", category: "Modulation")
chorus_ensemble = Pedal.create(name: "Boss CE-5 Chorus Ensemble", effect_type: "Chorus", price: 130, stereo: true, number_of_inputs: 1, number_of_outputs: 2, image: "https://static.roland.com/assets/images/products/gallery/ce_5_top_gal.jpg", category: "Modulation")
uni_vibe = Pedal.create(name: "MXR Uni_Vibe M68 Chorus/Vibrato", effect_type: "Chorus/Vibrato", price: 130, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://media.guitarcenter.com/is/image/MMGS7/J08010000000000-00-1600x1600.jpg", category: "Gain")
phase_90 = Pedal.create(name: "MXR M101 Phase 90", effect_type: "Phaser", price: 80, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://cdn.shopify.com/s/files/1/0202/0250/products/MXR_Phase90_front-stock.jpg?v=1419892027", category: "Modulation")
polychrome = Pedal.create(name: "Walrus Audio Polychrome Analog Flanger", effect_type: "Flanger", price: 200, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://cdn.shopify.com/s/files/1/0906/8480/files/Polychrome-cutout-front_700_1000x.png?v=1618320071", category: "Modulation")
vertigo = Pedal.create(name: "Source Audio Vertigo Tremelo", effect_type: "Tremelo", price: 170, stereo: true, number_of_inputs: 2, number_of_outputs: 2, image: "https://www.bhphotovideo.com/images/images1000x1000/source_audio_sa243_one_series_vertigo_tremolo_1331715.jpg", category: "Modulation")
boss_delay = Pedal.create(name: "Boss DD-8 Digital Delay", effect_type: "Delay", price: 170, stereo: true, number_of_inputs: 2, number_of_outputs: 2, image: "https://media.guitarcenter.com/is/image/MMGS7/DD-8-Digital-Delay-Effects-Pedal/L70091000000000-00-500x500.jpg", category: "Time")
holy_grail = Pedal.create(name: "Electro-Harmonix Holy Grail", effect_type: "Reverb", price: 130, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://www.bhphotovideo.com/images/images500x500/electro_harmonix_nholygrail_holy_grail_neo_digital_1135939.jpg", category: "Time")
echorec = Pedal.create(name: "Catalinbread Echorec", effect_type: "Echo", price: 240, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://cdn.shopify.com/s/files/1/0370/1873/0628/products/ECHORECShopify-01_21a97507-aa00-4bb3-88ec-7543058a4d83.png?v=1614227167", category: "Time")
supergo_plus = Pedal.create(name: "Electro Harmonix Supergo Plus", effect_type: "Multi-Effect", price: 271, stereo: true, number_of_inputs: 3, number_of_outputs: 3, image: "http://cdn.shopify.com/s/files/1/0810/2125/products/electro-harmonix-superego-synth-engine-832097386515_1200x1200.jpg?v=1522480649", category: "Multi-Effect")
polytune = Pedal.create(name: "TC Electronic PolyTune Poly-Chromatic Tuner Pedal", effect_type: "Tuner", price: 90, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://m.media-amazon.com/images/I/71D+Kk+qkgL._AC_SS450_.jpg", category: "Tuner")

puts "Creating Pedalboards..."
srv = Pedalboard.create(user_id: 1, name: "SRV", stereo: false)
gilmourish = Pedalboard.create(user_id: 1, name: "Gilmourish", stereo: false)

puts "Creating Pedalboard Pedals..."
srv_tube_screamer = PedalboardPedal.create(pedalboard_id: 1, pedal_id: 1)
srv_wah_wah = PedalboardPedal.create(pedalboard_id: 1, pedal_id: 7)
gilmour_fuzz_face = PedalboardPedal.create(pedalboard_id: 2, pedal_id: 3)
gilmour_power_boost = PedalboardPedal.create(pedalboard_id: 2, pedal_id: 4)
gilmour_dyna_comp = PedalboardPedal.create(pedalboard_id: 2, pedal_id: 5)
gilmour_volume = PedalboardPedal.create(pedalboard_id: 2, pedal_id: 6)
gilmour_wah = PedalboardPedal.create(pedalboard_id: 2, pedal_id: 8)
gilmour_uni_vibe = PedalboardPedal.create(pedalboard_id: 2, pedal_id: 10)
gilmour_phase_90 = PedalboardPedal.create(pedalboard_id: 2, pedal_id: 11)
gilmour_echorec = PedalboardPedal.create(pedalboard_id: 2, pedal_id: 16)
gilmour_supergo_plus = PedalboardPedal.create(pedalboard_id: 2, pedal_id: 17)

puts "✅ Done seeding!"
