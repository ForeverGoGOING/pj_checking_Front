from allennlp.modules.elmo import Elmo, batch_to_ids
import h5py

options_file = "elmo_2x4096_512_2048cnn_2xhighway_options.json"
weight_file = "elmo_2x4096_512_2048cnn_2xhighway_weights.hdf5"
# h5py_file = h5py.File(weight_file, 'r')
# Compute two different representation for each token.
# Each representation is a linear weighted combination for the
# 3 layers in ELMo (i.e., charcnn, the outputs of the two BiLSTM))
elmo = Elmo(options_file, weight_file, 3, dropout=0)

# use batch_to_ids to convert sentences to character ids
sentences = [['I', 'love', 'NLP'],['I', 'love']]
character_ids = batch_to_ids(sentences)
embeddings = elmo(character_ids)
print(len(embeddings['elmo_representations'][0]))
# embeddings['elmo_representations'] is length two list of tensors.
# Each element contains one layer of ELMo representations with shape
# (2, 3, 1024).
#   2    - the batch size
#   3    - the sequence length of the batch
#   1024 - the length of each ELMo vector
