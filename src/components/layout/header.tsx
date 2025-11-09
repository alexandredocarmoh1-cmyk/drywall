import Image from "next/image";

export default function Header() {
  return (
    <header className="py-12 text-center">
      <div className="inline-block p-4 bg-primary/10 rounded-full mb-4 border-2 border-primary/20">
        {/* Substitua a URL abaixo pela URL da sua logo */}
        <Image
          src="https://picsum.photos/seed/logo/100/100"
          alt="Logo Drywall Pro"
          width={96}
          height={96}
          className="rounded-full"
        />
      </div>
      <h1 className="font-headline text-4xl font-bold text-primary mb-2">
        Área de Membros 👷‍♂️
      </h1>
      <p className="text-muted-foreground">
        Curso Profissionalizante — Especialista em Drywall
      </p>
    </header>
  );
}
