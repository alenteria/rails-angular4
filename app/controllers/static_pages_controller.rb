class StaticPagesController < ActionController::Base
  include ActionController::MimeResponds

  def index
    respond_to do |format|
      format.html{ render file: 'public/index.html' }
    end
  end
end
