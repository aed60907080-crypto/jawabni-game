#!/usr/bin/perl
# ============================================================
#  جاوبني — تثبيت روابط صور الأسئلة داخل بنك الأسئلة
# ------------------------------------------------------------
#  يقرأ tools/image-urls.tsv بصيغة:   بصمة \t رمز_البادئة \t بقية_الرابط
#  البصمة = FNV-1a على  "نص السؤال|الإجابة"  (نفس دالة المتصفح)
#
#  الاستعمال:
#      perl tools/inject-images.pl tools/image-urls.tsv questions.js questions-extra.js questions-extra2.js
#
#  آمن للتشغيل أكثر من مرة: السؤال الذي عنده img أصلاً لا يُمَسّ.
# ============================================================
use strict;
use warnings;
use utf8;

binmode(STDOUT, ":encoding(UTF-8)");

# بادئات الروابط المضغوطة
my %PRE = (
  '1' => 'https://thumb.wikimedia.org/wikipedia/commons/thumb/',
  '2' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/',
  '3' => 'https://upload.wikimedia.org/wikipedia/commons/',
  '4' => 'https://thumb.wikimedia.org/wikipedia/',
  '5' => 'https://upload.wikimedia.org/wikipedia/',
  '0' => '',
);

# FNV-1a — مطابقة تماماً لنسخة المتصفح (charCodeAt على وحدات UTF-16)
sub fnv {
    my ($s) = @_;
    my $h = 2166136261;
    for my $c (split //, $s) {
        $h ^= ord($c);
        $h = ($h * 16777619) & 0xFFFFFFFF;
    }
    # toString(36)
    return '0' if $h == 0;
    my @d = (0..9, 'a'..'z');
    my $out = '';
    while ($h > 0) { $out = $d[$h % 36] . $out; $h = int($h / 36); }
    return $out;
}

my $mapfile = shift @ARGV or die "usage: inject-images.pl <map.tsv> <file.js> ...\n";

open(my $m, "<:encoding(UTF-8)", $mapfile) or die "cannot open $mapfile: $!\n";
my %url;
while (my $line = <$m>) {
    $line =~ s/^\x{FEFF}//;          # BOM
    chomp $line;
    next unless length $line;
    my ($h, $tag, $rest) = split /\t/, $line, 3;
    next unless defined $rest && length $rest;
    $url{$h} = ($PRE{$tag} // '') . $rest;
}
close $m;
printf("خريطة الروابط: %d مدخلاً\n\n", scalar keys %url);

my ($total, $added, $already, $nomatch) = (0, 0, 0, 0);

for my $file (@ARGV) {
    open(my $in, "<:encoding(UTF-8)", $file) or die "cannot open $file: $!\n";
    my @lines = <$in>;
    close $in;

    my $changed = 0;
    for my $line (@lines) {
        next unless $line =~ /^(\s*\{\s*l:\s*\d+,\s*q:\s*")([^"]*)(",\s*a:\s*")([^"]*)(")(.*?)(\},?\s*)$/;
        my ($p1, $q, $p2, $a, $p3, $rest, $tail) = ($1, $2, $3, $4, $5, $6, $7);
        $total++;

        if ($rest =~ /\bimg:/) { $already++; next; }

        my $u = $url{ fnv("$q|$a") };
        unless (defined $u) { $nomatch++; next; }

        $line = $p1 . $q . $p2 . $a . $p3 . ', img: "' . $u . '"' . $rest . $tail;
        $added++;
        $changed++;
    }

    if ($changed) {
        open(my $out, ">:encoding(UTF-8)", $file) or die "cannot write $file: $!\n";
        print $out @lines;
        close $out;
    }
    printf("  %-22s +%d\n", $file, $changed);
}

printf("\nالمجموع: %d سؤالاً | أُضيف %d | له صورة مسبقاً %d | بلا رابط %d\n",
       $total, $added, $already, $nomatch);
