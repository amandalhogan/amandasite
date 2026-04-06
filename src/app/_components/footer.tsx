import Container from "@/app/_components/container";
export function Footer() {
  return (
    <footer className="bg-[#fdfbf7] border-t border-neutral-200">
      <Container>
        <div className="py-10 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Amanda L. Hogan. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
