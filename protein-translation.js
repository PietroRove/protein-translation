//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (sequence) => {
  if (sequence === undefined || sequence == null || sequence == "")
    return [];
  var result = [];
  for (var i = 0; i < sequence.length; i += 3) {
    var codon = sequence[i] + sequence[i + 1] + sequence[i + 2];
    if (codon === 'AUG')
      result.push('Methionine');
    else if (codon === 'UUU' || codon === 'UUC')
      result.push('Phenylalanine');
    else if (codon === 'UUA' || codon === 'UUG')
      result.push('Leucine');
    else if (codon === 'UCU' || codon === 'UCC' || codon === 'UCA' || codon === 'UCG')
      result.push('Serine');
    else if (codon === 'UAU' || codon === 'UAC')
      result.push('Tyrosine');
    else if (codon === 'UGU' || codon === 'UGC')
      result.push('Cysteine');
    else if (codon === 'UGG')
      result.push('Tryptophan');
    else if (codon === 'UAA' || codon === 'UAG' || codon === 'UGA')
      break;
    else
      throw new Error('Invalid codon');
  }
  return result;
};