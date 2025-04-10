import { MorphingText } from '@/components/ui/morphing-text';

const texts = [
  'Hello',
  '你好',
  '哈囉',
  'こんにちは',
  '안녕하세요',
  'Bonjour',
  'Hola',
  'Ciao',
  'Привет',
  'Hallo',
  'Marhaba',
  'Olá',
  'Sawasdee',
  'Hej',
  'Γειά σας',
  'Ahoj',
  'Helló',
  'Cześć',
  'Bună ziua',
  'ПРИВІТ',
  'Merhaba',
  'שלום',
  'Habari',
  'Xin chào',
  'Halo',
  'Kamusta',
  'Dia duit',
  'Hei',
  'Labas',
  'Sveiki',
  'Tere',
  'Përshëndetje',
  'Здраво',
  'Helo',
  'Bok',
  'Здравейте',
  'Bongu',
  'សួស្ដី',
  'হ্যালো',
  'Vanakkam',
  'നമസ്ക്കാരം',
  'హలో',
  'Namaste',
  'Slaw',
  'Բարև',
  'Gamardjoba',
  'Сәлеметсіз бе',
  'สวัสดี',
  'नमस्ते',
  'مرحباً',
  'שלום',
  'Hej',
  'Molo',
  'Ola',
  'Aloha',
  'Hujambo',
  'Ciao',
  'Dia dhuit',
  'Saudations',
  'Jambo',
  'Marhaban',
  'Pryvit',
  'Hóu',
  'Chào bạn',
  'Sveiks',
];

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8">
      <MorphingText texts={texts} />
    </div>
  );
}
