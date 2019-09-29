

//% weight=10 color=#0000CC icon="\uf001" block="haodaMIDI"

namespace haodaMIDI {

    const PortDigital = [
        DigitalPin.P0,
        DigitalPin.P1,
        DigitalPin.P2,
        DigitalPin.P8,
        DigitalPin.P12,
        DigitalPin.P16

    ]

    export enum Ports {
        P0 = 0,
        P1 = 1,
        P2 = 2,
        P8 = 3,
        P12 = 4,
        P16 = 5

    }

    export enum riverss {

        //% block=0
        s0 = 0xc0,
        //% block=1
        s1 = 0xc1,
        //% block=2
        s2 = 0xc2,
        //% block=3
        s3 = 0xc3,
        //% block=4
        s4 = 0xc4,
        //% block=5
        s5 = 0xc5,
        //% block=6
        s6 = 0xc6,
        //% block=7
        s7 = 0xc7,
        //% block=8
        s8 = 0xc8,
        //% block=9
        s9 = 0xc9,
        //% block=10
        s10 = 0xca,
        //% block=11
        s11 = 0xcb,
        //% block=12
        s12 = 0xcc,
        //% block=13
        s13 = 0xcd,
        //% block=14
        s14 = 0xce,
        //% block=15
        s15 = 0xcf

    }

    export enum riverss1 {

        //% block=0
        a0 = 0x90,
        //% block=1
        a1 = 0x91,
        //% block=2
        a2 = 0x92,
        //% block=3
        a3 = 0x93,
        //% block=4
        a4 = 0x94,
        //% block=5
        a5 = 0x95,
        //% block=6
        a6 = 0x96,
        //% block=7
        a7 = 0x97,
        //% block=8
        a8 = 0x98,
        //% block=9
        a9 = 0x99,
        //% block=10
        a10 = 0x9a,
        //% block=11
        a11 = 0x9b,
        //% block=12
        a12 = 0x9c,
        //% block=13
        a13 = 0x9d,
        //% block=14
        a14 = 0x9e,
        //% block=15
        a15 = 0x9f

    }

    export enum musicscale {
        //% block=-1
        b0 = 0x00,
        //% block=0
        b1 = 0x0c,
        //% block=1
        b2 = 0x18,
        //% block=2
        b3 = 0x24,
        //% block=3
        b4 = 0x30,
        //% block=4
        b5 = 0x3c,
        //% block=5
        b6 = 0x48,
        //% block=6
        b7 = 0x54,
        //% block=7
        b8 = 0x60,
        //% block=8
        b9 = 0x6c,
        //% block=9
        b10 = 0x78

    }

    export enum musicnote {
        //% block="C"
        n0 = 0x00,
        //% block="C#"
        n1 = 0x01,
        //% block="D"
        n2 = 0x02,
        //% block="D#"
        n3 = 0x03,
        //% block="E"
        n4 = 0x04,
        //% block="F"
        n5 = 0x05,
        //% block="F#"
        n6 = 0x06,
        //% block="G"
        n7 = 0x07,
        //% block="G#"
        n8 = 0x08,
        //% block="A"
        n9 = 0x09,
        //% block="A#"
        n10 = 0x0a,
        //% block="B"
        n11 = 0x0b

    }

    export enum musicplay {
        //% block="Acoustic Grand Piano 大钢琴（声学钢琴）"
        dg1 = 0x00,
        //% block="Bright Acoustic Piano 明亮的钢琴"
        dg2 = 0x01,
        //% block="Electric Grand Piano 电钢琴"
        dg3 = 0x02,
        //% block="Honky-tonk Piano 酒吧钢琴"
        dg4 = 0x03,
        //% block="Rhodes Piano 柔和的电钢琴"
        dg5 = 0x04,
        //% block="Chorused Piano 加合唱效果的电钢琴"
        dg6 = 0x05,
        //% block="Harpsichord 羽管键琴（拨弦古钢琴）"
        dg7 = 0x06,
        //% block="Clavichord 科拉维科特琴（击弦古钢琴）"
        dg8 = 0x07,
        //% block="Celesta 钢片琴"
        dg9 = 0x08,
        //% block="Glockenspiel 钟琴"
        dg10 = 0x09,
		 //% block="Music box 八音盒"
		dg11 = 0x0a,
		 //% block="Vibraphone 颤音琴"
		dg12 = 0x0b,
		 //% block="Marimba 马林巴"
		dg13 = 0x0c,
		 //% block="Xylophone 木琴"
		dg14 = 0x0d,
		 //% block="Tubular Bells 管钟"
		dg15 = 0x0e,
		 //% block="Dulcimer 大扬琴"
		dg16 = 0x0f,
		//% block="Hammond Organ 击杆风琴"
        dg17 = 0x10,
        //% block="Percussive Organ 打击式风琴"
        dg18 = 0x11,
        //% block="Rock Organ 摇滚风琴"
        dg19 = 0x12,
        //% block="Church Organ 教堂风琴"
        dg20 = 0x13,
        //% block="Reed Organ 簧管风琴"
        dg21 = 0x14,
        //% block="Accordian 手风琴"
        dg22 = 0x15,
        //% block="Harmonica 口琴"
        dg23 = 0x16,
        //% block="Tango Accordian 探戈手风琴"
        dg24 = 0x17,
        //% block="Acoustic Guitar (nylon) 尼龙弦吉他"
        dg25 = 0x18,
        //% block="Acoustic Guitar (steel) 钢弦吉他"
        dg26 = 0x19,
		 //% block="Electric Guitar (jazz) 爵士电吉他"
		dg27 = 0x1a,
		 //% block="Electric Guitar (clean) 清音电吉他"
		dg28 = 0x1b,
		 //% block="Electric Guitar (muted) 闷音电吉他"
		dg29 = 0x1c,
		 //% block="Overdriven Guitar 加驱动效果的电吉他"
		dg30 = 0x1d,
		 //% block="Distortion Guitar 加失真效果的电吉他"
		dg31 = 0x1e,
		 //% block="Guitar Harmonics 吉他和音"
		dg32 = 0x1f,
		//% block="Acoustic Bass 大贝司（声学贝司）"
        dg33 = 0x20,
        //% block="Electric Bass(finger) 电贝司（指弹）"
        dg34 = 0x21,
        //% block="Electric Bass (pick) 电贝司（拨片）"
        dg35 = 0x22,
        //% block="Fretless Bass 无品贝司"
        dg36 = 0x23,
        //% block="Slap Bass 1 掌击Bass 1"
        dg37 = 0x24,
        //% block="Slap Bass 2 掌击Bass 2"
        dg38 = 0x25,
        //% block="Synth Bass 1 电子合成Bass 1"
        dg39 = 0x26,
        //% block="Synth Bass 2 电子合成Bass 2"
        dg40 = 0x27,
        //% block="Violin 小提琴"
        dg41 = 0x28,
        //% block="Viola 中提琴"
        dg42 = 0x29,
		 //% block="Cello 大提琴"
		dg43 = 0x2a,
		 //% block="Contrabass 低音大提琴"
		dg44 = 0x2b,
		 //% block="Tremolo Strings 弦乐群颤音音色"
		dg45 = 0x2c,
		 //% block="Pizzicato Strings 弦乐群拨弦音色"
		dg46 = 0x2d,
		 //% block="Orchestral Harp 竖琴"
		dg47 = 0x2e,
		 //% block="Timpani 定音鼓"
		dg48 = 0x2f,
		//% block="String Ensemble 1 弦乐合奏音色1"
        dg49 = 0x30,
        //% block="String Ensemble 2 弦乐合奏音色2"
        dg50 = 0x31,
        //% block="Synth Strings 1 合成弦乐合奏音色1"
        dg51 = 0x32,
        //% block="Synth Strings 2 合成弦乐合奏音色2"
        dg52 = 0x33,
        //% block="Choir Aahs 人声合唱“啊”"
        dg53 = 0x34,
        //% block="Voice Oohs 人声“嘟”"
        dg54 = 0x35,
        //% block="Synth Voice 合成人声"
        dg55 = 0x36,
        //% block="Orchestra Hit 管弦乐敲击齐奏"
        dg56 = 0x37,
        //% block="Trumpet 小号"
        dg57 = 0x38,
        //% block="Trombone 长号"
        dg58 = 0x39,
		 //% block="Tuba 大号"
		dg59 = 0x3a,
		 //% block="Muted Trumpet 加弱音器小号"
		dg60 = 0x3b,
		 //% block="French Horn 法国号（圆号）"
		dg61 = 0x3c,
		 //% block="Brass Section 铜管组（铜管乐器合奏音色）"
		dg62 = 0x3d,
		 //% block="Synth Brass 1 合成铜管音色1"
		dg63 = 0x3e,
		 //% block="Synth Brass 2 合成铜管音色2"
		dg64 = 0x3f,
		//% block="Soprano Sax 高音萨克斯风"
        dg65 = 0x40,
        //% block="Alto Sax 次中音萨克斯风"
        dg66 = 0x41,
        //% block="Tenor Sax 中音萨克斯风"
        dg67 = 0x42,
        //% block="Baritone Sax 低音萨克斯风"
        dg68 = 0x43,
        //% block="Oboe 双簧管"
        dg69 = 0x44,
        //% block="English Horn 英国管"
        dg70 = 0x45,
        //% block="Bassoon 巴松（大管）"
        dg71 = 0x46,
        //% block="Clarinet 单簧管（黑管）"
        dg72 = 0x47,
        //% block="Piccolo 短笛"
        dg73 = 0x48,
        //% block="Flute 长笛"
        dg74 = 0x49,
		 //% block="Recorder 竖笛"
		dg75 = 0x4a,
		 //% block="Pan Flute 排箫"
		dg76 = 0x4b,
		 //% block="Bottle Blow 瓶笛"
		dg77 = 0x4c,
		 //% block="Shakuhachi 日本尺八"
		dg78 = 0x4d,
		 //% block="Whistle 口哨声"
		dg79 = 0x4e,
		 //% block="Ocarina 奥卡雷那"
		dg80 = 0x4f,
		//% block="Lead 1 (square) 合成主音1（方波）"
        dg81 = 0x50,
        //% block="Lead 2 (sawtooth) 合成主音2（锯齿波）"
        dg82 = 0x51,
        //% block="Lead 3 (caliope lead) 合成主音3"
        dg83 = 0x52,
        //% block="Lead 4 (chiff lead) 合成主音4"
        dg84 = 0x53,
        //% block="Lead 5 (charang) 合成主音5"
        dg85 = 0x54,
        //% block="Lead 6 (voice) 合成主音6（人声）"
        dg86 = 0x55,
        //% block="Lead 7 (fifths) 合成主音7（平行五度）"
        dg87 = 0x56,
        //% block="Lead 8 (bass+lead)合成主音8（贝司加主音）"
        dg88 = 0x57,
        //% block="Pad 1 (new age) 合成音色1（新世纪）"
        dg89 = 0x58,
        //% block="Pad 2 (warm) 合成音色2 （温暖）"
        dg90 = 0x59,
		 //% block="Pad 3 (polysynth) 合成音色3"
		dg91 = 0x5a,
		 //% block="Pad 4 (choir) 合成音色4 （合唱）"
		dg92 = 0x5b,
		 //% block="Pad 5 (bowed) 合成音色5"
		dg93 = 0x5c,
		 //% block="Pad 6 (metallic) 合成音色6 （金属声）"
		dg94 = 0x5d,
		 //% block="Pad 7 (halo) 合成音色7 （光环）"
		dg95 = 0x5e,
		 //% block="Pad 8 (sweep) 合成音色8"
		dg96 = 0x5f,
		//% block="FX 1 (rain) 合成效果 1 雨声"
        dg97 = 0x60,
        //% block="FX 2 (soundtrack) 合成效果 2 音轨"
        dg98 = 0x61,
        //% block="FX 3 (crystal) 合成效果 3 水晶"
        dg99 = 0x62,
        //% block="FX 4 (atmosphere) 合成效果 4 大气"
        dg100 = 0x63,
        //% block="FX 5 (brightness) 合成效果 5 明亮"
        dg101 = 0x64,
        //% block="FX 6 (goblins) 合成效果 6 鬼怪"
        dg102 = 0x65,
        //% block="FX 7 (echoes) 合成效果 7 回声"
        dg103 = 0x66,
        //% block="FX 8 (sci-fi) 合成效果 8 科幻"
        dg104 = 0x67,
        //% block="Sitar 西塔尔（印度）"
        dg105 = 0x68,
        //% block="Banjo 班卓琴（美洲）"
        dg106 = 0x69,
		 //% block="Shamisen 三昧线（日本）"
		dg107 = 0x6a,
		 //% block="Koto 十三弦筝（日本）"
		dg108 = 0x6b,
		 //% block="Kalimba 卡林巴"
		dg109 = 0x6c,
		 //% block="Bagpipe 风笛"
		dg110 = 0x6d,
		 //% block="Fiddle 民族提琴"
		dg111 = 0x6e,
		 //% block="Shanai 山奈"
		dg112 = 0x6f,
		//% block="Tinkle Bell 叮当铃"
        dg113 = 0x70,
        //% block="Agogo 阿哥哥鼓"
        dg114 = 0x71,
        //% block="Steel Drums 钢鼓"
        dg115 = 0x72,
        //% block="Woodblock 木鱼"
        dg116 = 0x73,
        //% block="Taiko Drum 太鼓"
        dg117 = 0x74,
        //% block="Melodic Tom 通通鼓"
        dg118 = 0x75,
        //% block="Synth Drum 合成鼓"
        dg119 = 0x76,
        //% block="Reverse Cymbal 铜钹"
        dg120 = 0x77,
        //% block="Guitar Fret Noise 吉他换把杂音"
        dg121 = 0x78,
        //% block="Breath Noise 呼吸声"
        dg122 = 0x79,
		 //% block="Seashore 海浪声"
		dg123 = 0x7a,
		 //% block="Bird Tweet 鸟鸣"
		dg124 = 0x7b,
		 //% block="Telephone Ring 电话铃"
		dg125 = 0x7c,
		 //% block="Helicopter 直升机"
		dg126 = 0x7d,
		 //% block="Applause 鼓掌声"
		dg127 = 0x7e,
		 //% block="Gunshot 枪声"
		dg128 = 0x7f
		
		
    }

    export enum soundd {
        //% block="Acoustic_Bass_Drum 大鼓"
        p1 = 0x23,
        //% block="Bass_Drum_1 低音鼓"
        p2 = 0x24,
        //% block="Side_Stick 边击"
        p3 = 0x25,
        //% block="Acoustic_Snare 小鼓(松)"
        p4 = 0x26,
        //% block="Hand_CLap 拍手"
        p5 = 0x27,
        //% block="Elestric_Snare 小鼓(紧)"
        p6 = 0x28,
        //% block="Low_Floor_Tom 通鼓(最低)"
        p7 = 0x29,
        //% block="Closed_HiHat_E1 立镲(闭)"
        p8 = 0x2a,
        //% block="High_Floor_Tom 通鼓(低)"
        p9 = 0x2b,
        //% block="Pedal_HiHat_E1 踩镲"
        p10 = 0x2c,
		//% block="Low_Tom 通鼓(中低)"
        p11 = 0x2d,
        //% block="Open_HiHat 立镲(开)"
        p12 = 0x2e,
        //% block="Low_Mid_Tom 通鼓(中)"
        p13 = 0x2f,
        //% block="High_Mid_Tom 通鼓(中高)"
        p14 = 0x30,
        //% block="Crash_Cymbal 通鼓(中高)"
        p15 = 0x31,
        //% block="High_Tom 通鼓(高)"
        p16 = 0x32,
        //% block="Ride_Cymbal_1 厚吊镲(低)"
        p17 = 0x33,
        //% block="Chinese_Cymbal 锣"
        p18 = 0x34,
        //% block="Ride_Bell 厚吊镲(中)"
        p19 = 0x35,
        //% block="Tambourine 铃鼓"
        p20 = 0x36,
		 //% block="Splash_Cymbal 小吊镲"
		p21 = 0x37,
		 //% block="Cowbell 牛铃"
		p22 = 0x38,
		 //% block="Crash_Cymbal_2 薄吊镲(高)"
		p23 = 0x39,
		 //% block="Vibra_Slap 振音梆盒"
		p24 = 0x3a,
		 //% block="Ride_Cymbal_2 厚吊镲(高)"
		p25 = 0x3b,
		 //% block="High_Bongo 邦戈鼓(高)"
		p26 = 0x3c,
		//% block="Low_Bongo 邦戈鼓(低)"
        p27 = 0x3d,
        //% block="Mute_Hi_Conga 康加鼓(高闭)"
        p28 = 0x3e,
        //% block="Open_Hi_Conga 康加鼓(高开)"
        p29 = 0x3f,
        //% block="Low_Conga 康加鼓(低)"
        p30 = 0x40,
        //% block="High_Timbale 边鼓(高)"
        p31 = 0x41,
        //% block="Low_Timbale 边鼓(低)"
        p32 = 0x42,
        //% block="High_Agogo 拉丁打铃(高)"
        p33 = 0x43,
        //% block="Low_Agogo 拉丁打铃(低)"
        p34 = 0x44,
        //% block="Cabasa 喀吧萨"
        p35 = 0x45,
        //% block="Maracas 沙锤"
        p36 = 0x46,
		 //% block="Short_Whistle_E2 哨子(短)"
		p37 = 0x47,
		 //% block="Long_Whistle_E2 哨子(长)"
		p38 = 0x48,
		 //% block="Short_Guiro_E3 刮板(短)"
		p39 = 0x49,
		 //% block="Long_Guiro_E3 刮板(长)"
		p40 = 0x4a,
		//% block="Claves 响棒"
        p41 = 0x4b,
        //% block="Hi_Wood_Block 梆盒(高)"
        p42 = 0x4c,
		//% block="Low_Wood_Block 梆盒(低)"
        p43 = 0x4d,
        //% block="Mute_Cuica_E4 拉鼓(闭)"
        p44 = 0x4e,
        //% block="Open_Cuica_E4 拉鼓(开)"
        p45 = 0x4f,
        //% block="Mute_Triangle_E5 三角铁(闭)"
        p46 = 0x50,
        //% block="Open_Triangle_E5 三角铁(开)"
        p47 = 0x51

    }



    let pinn = 0;


    function midi_setpin(port: number): void {
        pinn = port;
        pins.digitalWritePin(port, 1);
    }

    function midi_write(index: number): void {
        pins.digitalWritePin(pinn, 1);
        let mask;
        pins.digitalWritePin(pinn, 0);
        control.waitMicros(8);
        for (mask = 0x01; mask < 0x81; mask <<= 1) {
            if (index & mask) {
                pins.digitalWritePin(pinn, 1);
            } else {
                pins.digitalWritePin(pinn, 0);
            }
            control.waitMicros(0);
        }
        pins.digitalWritePin(pinn, 1);


    }


    function midi_send(a: number, b: number, c: number): void {
        midi_write(a);
        midi_write(b);
        midi_write(c);
    }


    //% weight=40
    //% blockId=HaodaMidi_set block="MIDI at pin|%port|set channel|%index|tone|%pply"
    export function settone(port: Ports, index: riverss, pply: musicplay): void {
        let pin = PortDigital[port];
        midi_setpin(pin);
        midi_send(index, pply, pply);
    }

    //% weight=40
    //% blockId=HaodaMidi_sendtt block="MIDI at pin %port send channel %index scale %sca note %noty volume %pply"
	//% inlineInputMode=inline
    export function sendtone(port: Ports, index: riverss1, scale: musicscale, note: musicnote, pply: number): void {
        let pin = PortDigital[port];
        midi_setpin(pin);
        let value = scale + note;
        midi_send(index, value, pply);
    }

    //% weight=40
    //% blockId=HaodaMidi_play block="MIDI at pin|%port|send percussion|%index|volume|%pcl"
    export function sendpercussion(port: Ports, index: soundd, pcl: number): void {
        let pin = PortDigital[port];
        midi_setpin(pin);
        midi_send(0x99, index, pcl);
    }
    /**
        //% weight=20
        //% blockId=HaodaMidi_test2 block="midi初始化|%port"
        export function ttest2(port: Ports): void {
            let pin = PortDigital[port];
            midi_setpin(pin);
    
        }
    
        //% weight=20
        //% blockId=HaodaMidi_test1 block="演奏"
        export function ttest1(): void {
    
            midi_send(0x99, 0x23, 0x32);
        }
    
        //% weight=20
        //% blockId=HaodaMidi_test3 block="停止"
        export function ttest3(): void {
    
            midi_send(0x99, 0x23, 0x00);
        }
    */

}