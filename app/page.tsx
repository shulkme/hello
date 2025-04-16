import { MorphingText } from '@/components/ui/morphing-text';

const texts = [
  'Hello',
  '你好',
  '哈囉',
  'こんにちは',
  '안녕하세요',
  'హలో',
  'مرحباً',
  'হ্যালো',
  'Բարև',
  'สวัสดี',
  'नमस्ते',
  'សួស្ដី',
  'നമസ്ക്കാരം',
  'Привет',
  'Olá',
  'Bonjour',
  'Përshëndetje',
  'Γειά σας',
];

export default function Home() {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center">
      <MorphingText texts={texts} />
    </div>
  );
}
